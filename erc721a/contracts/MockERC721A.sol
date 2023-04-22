// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.18;

import "erc721a/contracts/ERC721A.sol";

contract MockERC721A is ERC721A {
    constructor() ERC721A("Test", "TST") {}

    function mint(uint amount) external {
        _mint(msg.sender, amount);
    }
}
