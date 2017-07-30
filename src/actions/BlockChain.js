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

    let contractId = '0x8ae251f8612fb366cbcb831a0c8cd2229f2e3d1a';

    if (patientName === 'Abhishek Jain') {
      contractId = '0x8ae251f8612fb366cbcb831a0c8cd2229f2e3d1a';
    } else if (patientName === 'Sourabh Lodha') {
      contractId = '0x037ce2d837f441a4e139570bed1977eefde49179';
    } else if (patientName === 'Sameena Sabungar') {
      contractId = '0xfc57b2081c1912df4a62bb5914d601a81185af1d';
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

    let contractId = '0xfcb4b04b00f3ed01d3b1d9ebdfd86400c61259dd';

    if (patientName === 'Abhishek Jain') {
      contractId = '0x8ae251f8612fb366cbcb831a0c8cd2229f2e3d1a';
    } else if (patientName === 'Sourabh Lodha') {
      contractId = '0x037ce2d837f441a4e139570bed1977eefde49179';
    } else if (patientName === 'Sameena Sabungar') {
      contractId = '0xfcb4b04b00f3ed01d3b1d9ebdfd86400c61259dd';
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
