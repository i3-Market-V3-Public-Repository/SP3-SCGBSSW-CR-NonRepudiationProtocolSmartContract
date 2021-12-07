//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract NonRepudiation {
    struct Proof {
        uint256 timestamp;
        uint256 secret;
    }
    mapping(address => mapping (uint256 => Proof)) public registry;
    event Registration(address sender, uint256 dataExchangeId, uint256 timestamp, uint256 secret);

    function setRegistry(uint256 _dataExchangeId, uint256 _secret) public {
        require(registry[msg.sender][_dataExchangeId].secret == 0);
        registry[msg.sender][_dataExchangeId] = Proof(block.timestamp, _secret);
        emit Registration(msg.sender, _dataExchangeId, block.timestamp, _secret);
    }
}
