//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract NonRepudiation {
    mapping(address => mapping (uint256 => uint256)) public registry;
    event Registration(address sender, uint256 dataExchangeId, uint256 secret);

    function setRegistry(uint256 _dataExchangeId, uint256 _secret) public {
        require(registry[msg.sender][_dataExchangeId] == 0);
        registry[msg.sender][_dataExchangeId] = _secret;
        emit Registration(msg.sender, _dataExchangeId, _secret);
    }
}
