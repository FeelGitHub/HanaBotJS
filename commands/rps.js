let rps = ["**:pencil: paper**", "**:moyai: rock**", "**:scissors: scissors**"];
function random() { return `${rps[Math.floor(Math.random() * Math.floor(2))]}!` }
exports.run = (client, msg, args) => {
    let choice = args.join(" ").toLowerCase();
    if (choice === '') return msg.reply("Please specify either rock, paper or scissors.");
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") return msg.reply(`Please specify either rock, paper or scissors. ${choice} isn't one of those :P`);
    msg.reply(random());
}
module.exports.config = {
    name: "RPS",
    description: "Play rock paper scissors",
    usage: "$rps",
    accessableby: "Members"
}