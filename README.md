# Crowdfunding---Kickstart
Crowdfunding Web App, based on Udemy Course "Ethereum and Solidity, the complete developer's guide" from Stephen Gride.

Description:
Web portal enabling:
- projects creator (entrepreneurs) to create a Crowdfunding campaing, as a smart contract in Ethereum (Rinkeby)
- contributors to contribute to the funding campaign
- when the campaign creator wants to spend the money, he issues a spending request that has to be validated by the contributors. 
If more than 50% of the contributors approve the spending request, it is approved and the campaign creator can spend it.

**** The project is implemented on the Ethereum Goerli test network ****

The project is implemented with 2 smart contracts. The first one is a factory that creates instances of the second contract, that manages each campaign.
The front-end is implemented with React using Next.js framework. Styling is done with Semantic UI react. 

Install:
- clone repository
- npm install
- npm run build
- npm run start
