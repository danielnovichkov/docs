---
sidebar_position: 2
---

# Terminology

Please see below the definitions of the most used terms on the Everscale network. 

### Everscale

Decentralised blockchain network that comprises many leading applications and services. Everscale has powerful developer tools, such as compilers for Solidity and C++, API, an SDK that includes client libraries for 13 programming languages and other convenient instruments designed for developers to build outstanding blockchain applications. 

### Blockchain 

The chain of all blocks that have been added to the Everscale network throughout the history of the network. Each block has a reference to the previous block. Thus, it permits us to maintain a sequence of all blocks in the chain. 

### Ever

Ever is the native cryptocurrency of Everscale. Besides being an investment opportunity for users, it has multiple uses inside as well as outside the Everscale network.

### TVM

TVM is the virtual machine used to execute smart-contract code in the masterchain and in the basic workchain.  
Any user can request the execution of arbitrary code on the TVM. 

For more information about TVM please consult [this page](../arch/tvm.md)

### Nodes

Nodes are ordinary computers on which the Everscale program is running. Each node is connected to other nodes, which allows to come to a consensus, which is a special mechanism by which information about the correctness of transactions on the network is checked. The Everscale network is the aggregate of all Everscale nodes and their communications.

### Accounts

This is the place for storing Ever. Besides storage, users with an account are able to deposit and transfer Ever. The account record stores account address and account balance. Accounts are ultimately stored in TVM. For more information about Accounts please consult [this page](../arch/40-accounts.md).

### Transactions

A transaction is the result of a contract execution. In general, a transaction is generated with one incoming message (external or internal) and can generate several outcoming messages (external or internal) as a result. Any user can broadcast a transaction request to the Everscale network from a node. 

### Blocks

There is a very high number of transactions on the Everscale network. Due to this, transactions are grouped in blocks. Each block counts hundreds of transactions. 

### Smart contracts

SMs are a kind of algorithm, or program that runs on Everscale or other blockchains, like Ethereum, which was the first to come up with the idea of smart contracts. They work in accordance to a prescribed set of rules that are programmed by developers. When all conditions prescribed in the contract are met, the contract is executed.

For more information about smart contracts please consult [this page](../develop/smart-contract/getting-started.md)

### Shards

Shards in Everscale are used for solving the classical issue faced by blockchains, which is low throughput. Sharding is merely partition of data in a database, in our case in the Everscale blockchain.  
Due to sharding, Everscale achieved one of the highest transactions per second rate available out there. For detailed information about how sharding works please consult [this page](../develop/from-another-platform/comparison-with-ethereum.md).
