import { actionTypes as types } from '../constants';
import Web3 from 'web3';
// import contract from 'truffle-contract';
import CryptoJS from 'crypto-js';

export const getPatient = patientName => dispatch => {
  console.log(patientName);
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      'http://demo1s62x.southcentralus.cloudapp.azure.com:8545',
    ),
  );

  const account = web3.eth.getAccounts((err, accs) => accs[0]);
  web3.eth.defaultAccount = account;

  const source =
    'pragma solidity ^0.4.6;contract PatientSafe{struct PatientDetails{string patientName;uint patientId;uint previousPatientId;uint Timestamp;string bloodGroup;}mapping(uint => PatientDetails) Trail;uint8 TrailCount=0;function AddNewPatient(uint patientId, string patientName, string bloodGroup){PatientDetails memory newPatient;newPatient.patientName = patientName;newPatient.patientId = patientId;newPatient.bloodGroup= bloodGroup;newPatient.Timestamp = now;if(TrailCount!=0){newPatient.previousPatientId = Trail[TrailCount].patientId;}Trail[TrailCount] = newPatient;TrailCount++;}function GetTrailCount() returns(uint8){return TrailCount;}function GetPatient(uint8 TrailNo) returns(string,uint,uint,uint,string){ return (Trail[TrailNo].patientName, Trail[TrailNo].patientId,Trail[TrailNo].previousPatientId,Trail[TrailNo].Timestamp ,Trail[TrailNo].bloodGroup); }}';

  web3.eth.compile.solidity(source, (error, safeCompiled) => {
    const abi = safeCompiled['<stdin>:PatientSafe'].info.abiDefinition;
    const contract = web3.eth.contract(abi);

    let contractId = '0xf68277e8855d4bb3187ac6aa52744c7a82ac05bf';

    if (patientName === 'Kane williamson') {
      contractId = '0x60e5df6d576471f907bdaa7b7289bc1167bd291b';
    } else if (patientName === 'Tim southee') {
      contractId = '0x3bff50db8e8074f67ef3d803659a79d072d7f25d';
    } else if (patientName === 'Samy Haydon') {
      contractId = '0xf68277e8855d4bb3187ac6aa52744c7a82ac05bf';
    }

    const deployedSafe = contract.at(contractId);

    deployedSafe.GetTrailCount.call((error, trailCount) =>
      deployedSafe.GetPatient.call(trailCount - 1, (err, returnValues) => {
        const data = {
          name: CryptoJS.AES
            .decrypt(returnValues[0], '123')
            .toString(CryptoJS.enc.Utf8),
          bloodGroup: CryptoJS.AES
            .decrypt(returnValues[4], '123')
            .toString(CryptoJS.enc.Utf8),
          patientList: patientList,
        };
        dispatch({ type: types.GET_PATIENT, data });
      }),
    );
  });
};

export const getPhiDetail = patientName => dispatch => {
  console.log(patientName);
  const web3 = new Web3(
    new Web3.providers.HttpProvider(
      'http://demo1s62x.southcentralus.cloudapp.azure.com:8545',
    ),
  );

  const account = web3.eth.getAccounts((err, accs) => accs[0]);
  web3.eth.defaultAccount = account;

  const source =
    'pragma solidity ^0.4.6;contract PHISafe{struct PHIDetails{uint patientId;uint previousPatientId;string billing;string drug_alcohol;string hivTest;string geneticResult;string bloodTest;}mapping(uint => PHIDetails) Trail;uint8 TrailCount=0;function AddNewPatientPHI(uint patientId, string billing, string drug_alcohol, string hivTest,string geneticResult,string bloodTest){PHIDetails memory newPatient;newPatient.patientId = patientId;newPatient.billing = billing;newPatient.drug_alcohol = drug_alcohol;newPatient.hivTest = hivTest;newPatient.geneticResult = geneticResult;newPatient.bloodTest = bloodTest;if(TrailCount!=0){newPatient.previousPatientId = Trail[TrailCount].patientId;}Trail[TrailCount] = newPatient;TrailCount++;}function GetTrailCountPHI() returns(uint8){return TrailCount;}function GetPatientPHI(uint8 TrailNo) returns(uint,uint,string,string,string,string,string){return (Trail[TrailNo].patientId,Trail[TrailNo].previousPatientId,Trail[TrailNo].billing,Trail[TrailNo].drug_alcohol,Trail[TrailNo].hivTest,Trail[TrailNo].geneticResult,Trail[TrailNo].bloodTest);}}';

  web3.eth.compile.solidity(source, (error, safeCompiled) => {
    const abi = safeCompiled['<stdin>:PHISafe'].info.abiDefinition;
    const contract = web3.eth.contract(abi);

    let contractId = '0xae8bd9910ed0e7290143cef86ebe57c7ab1785a9';

    if (patientName === 'Tim southee') {
      contractId = '0x8e946899e383a21a3dd831a4b48b9937200d1704';
    } else if (patientName === 'Kane williamson') {
      contractId = '0x86214eaa18a4514e6c1b61c97b1400fdb71f9632';
    } else if (patientName === 'Samy Haydon') {
      contractId = '0xae8bd9910ed0e7290143cef86ebe57c7ab1785a9';
    }

    const deployedSafe = contract.at(contractId);

    deployedSafe.GetTrailCountPHI.call((error, trailCount) =>
      deployedSafe.GetPatientPHI.call(trailCount - 1, (err, returnValues) => {
        const blood = CryptoJS.AES
          .decrypt(returnValues[2], '123')
          .toString(CryptoJS.enc.Utf8);
        const biling = CryptoJS.AES
          .decrypt(returnValues[3], '123')
          .toString(CryptoJS.enc.Utf8);
        const drug = CryptoJS.AES
          .decrypt(returnValues[4], '123')
          .toString(CryptoJS.enc.Utf8);
        const hiv = CryptoJS.AES
          .decrypt(returnValues[5], '123')
          .toString(CryptoJS.enc.Utf8);
        const genetic = CryptoJS.AES
          .decrypt(returnValues[6], '123')
          .toString(CryptoJS.enc.Utf8);

        const data = { blood, biling, drug, hiv, genetic };
        dispatch({ type: types.GET_PHI, data });
      }),
    );
  });
};

export const showPatientModal = () => dispatch => {
  dispatch({ type: types.SHOW_PATIENT_MODAL });
};
export const hidePatientModal = () => dispatch => {
  dispatch({ type: types.HIDE_PATIENT_MODAL });
};

export const hospitalChatBot = () => dispatch => {
  dispatch({ type: types.IS_HOSPITAL });
};
export const hospitalChatBotClose = () => dispatch => {
  dispatch({ type: types.IS_HOSPITAL_CLOSE });
};

const patientList = [
  {
    name: 'Joe, Burns',
    city: 'ICU1, City',
    case: 'Sepsis',
    address: '89Y F LOS 4D',
    gender: 'F',
  },
  {
    name: 'Bamberger, Hellen',
    city: '507, City',
    case: 'Atrial Fibrillation',
    address: '75Y F LOS 1D',
    gender: 'F',
  },
  {
    name: 'Blazer, Roy',
    city: '401, City',
    case: 'Sepsis',
    address: '85Y M LOS 4D',
    gender: 'M',
  },
  {
    name: 'Bonnet, Lola',
    city: '209, City',
    case: 'Asthma exacerbation',
    address: '15Y F LOS 4D',
    gender: 'F',
  },
  {
    name: 'Brooks,, Angela',
    city: 'ER, City',
    case: 'Abdominal Pain',
    address: '19Y F LOS 7.5H',
    gender: 'F',
  },
  {
    name: 'Chang, Eric',
    city: 'Cling, City',
    case: 'Post-OP',
    address: '50Y M 01/14/17',
    gender: 'M',
  },
  {
    name: 'Collins, John',
    city: 'Cling, City',
    case: 'Follow up',
    address: '54Y M 01/12/17',
    gender: 'M',
  },
  {
    name: 'Darr, Molly',
    city: '501, City',
    case: 'Acute Mi',
    address: '75Y F LOS 4D',
    gender: 'F',
  },
  {
    name: 'Greene, Christinia',
    city: 'Cling, City',
    case: 'New Patient',
    address: '75Y F 1/14/17',
    gender: 'F',
  },
];
