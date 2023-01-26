// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract SecretsCementery {
    struct Secret {
        uint256 id;
        address owner;
        uint256 timestamp;
        bytes32 secret;
    }

    uint256 public totalSecretsBuriedOut;
    mapping(uint256 => Secret) public secrets;
    mapping(address => uint256[]) public secretsByOwner;

    event SecretBuriedOut(
        uint256 indexed secretId,
        address owner,
        uint256 timestamp,
        Secret diedSecret
    );

    uint8 secretNum;

    constructor(uint8 _a, uint8 b) {
        secretNum = _a + b;
    }

    function buryNewSecret(string memory _secret) public {
        uint256 secretId = totalSecretsBuriedOut;
        totalSecretsBuriedOut += 1;

        Secret memory newSecret = Secret(
            secretId,
            msg.sender,
            block.timestamp,
            _burySecret(_secret)
        );

        secrets[secretId] = newSecret;
        secretsByOwner[msg.sender].push(secretId);

        emit SecretBuriedOut(secretId, msg.sender, block.timestamp, newSecret);
    }

    function _burySecret(
        string memory _secret
    ) internal view returns (bytes32 buriedSecret) {
        buriedSecret = keccak256(
            abi.encodePacked(_secret, msg.sender, block.timestamp)
        );
    }

    function getSecretById(
        uint256 _secretId
    ) public view returns (Secret memory) {
        return secrets[_secretId];
    }

    function getSecretByOwner() public view returns (uint256[] memory) {
        return secretsByOwner[msg.sender];
    }

    function a() private pure {}
}
