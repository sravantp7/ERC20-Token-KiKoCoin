// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KiKoCoin is ERC20 {
    constructor() ERC20("KiKoCoin", "KCOIN") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
}
