function scoring(array) {
  return array
    .map((player) => {
      return [player.name, calculate(player)];
    })
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .map((players) => players[0]);
}

function calculate(player) {
  const scores =
    player.normKill * 100 +
    player.assist * 50 +
    player.damage * 0.5 +
    player.healing +
    2 ** player.streak +
    player.envKill * 500;

  return scores;
}

let player1 = {
  name: 'JuanPablo',
  normKill: 5,
  assist: 12,
  damage: 3200,
  healing: 0,
  streak: 4,
  envKill: 1,
};

let player2 = {
  name: 'ProfX',
  normKill: 2,
  assist: 14,
  damage: 600,
  healing: 1500,
  streak: 0,
  envKill: 0,
};

const res = scoring([player1, player2]);
console.log(res);
