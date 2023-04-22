// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MockERC721 is ERC721 {
    uint tokenId;

    constructor() ERC721("Test", "TST") {}

    function mint(uint amount) external {
        for (uint i = 0; i < amount; i++) {
            _mint(msg.sender, tokenId + i);
        }
        tokenId += amount;
    }
}
