//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

contract Metadata {
    function getName() external pure returns (string memory) {
        return "Rampop";
    }
    
    function getColor() external pure returns (uint8, uint8, uint8) {
        return (0, 123, 255);
    }
}