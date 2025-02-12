function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6b96w48VEGN":
        Script1();
        break;
      case "66fOiXj4Z3e":
        Script2();
        break;
      case "5kgbjalyWm1":
        Script3();
        break;
      case "5ag6OVUkVVX":
        Script4();
        break;
      case "5tzamfSBwBt":
        Script5();
        break;
      case "676rT4IuM5D":
        Script6();
        break;
      case "65qhrSv5GzS":
        Script7();
        break;
      case "6FL1qpHcrAa":
        Script8();
        break;
      case "6fC6RexsZJD":
        Script9();
        break;
      case "6lgevqgaYKf":
        Script10();
        break;
      case "6IRHikV9F5y":
        Script11();
        break;
      case "6gOm7HOqjP7":
        Script12();
        break;
      case "5jRemQMnm1e":
        Script13();
        break;
      case "5pev7nHcQMZ":
        Script14();
        break;
      case "6Loatp0XE7t":
        Script15();
        break;
      case "6ilDGZJTpLx":
        Script16();
        break;
      case "5ZlwsQ5XWpY":
        Script17();
        break;
      case "5rcGJSwhmY4":
        Script18();
        break;
      case "6XTRJe0UmdQ":
        Script19();
        break;
      case "5g8MoRAUZS3":
        Script20();
        break;
      case "6VMeX8MCEf8":
        Script21();
        break;
      case "5snTRrTt9k9":
        Script22();
        break;
      case "5ck23OtcJOg":
        Script23();
        break;
      case "5pXR2fcUJaN":
        Script24();
        break;
      case "6KFK0D4GQwu":
        Script25();
        break;
      case "6O7ChbgOMLm":
        Script26();
        break;
      case "5Yu1HR5cHO8":
        Script27();
        break;
      case "6KizA4uNWfT":
        Script28();
        break;
      case "6bTpvw78KbH":
        Script29();
        break;
      case "5r0P8oxvw2f":
        Script30();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  const target = object('63UyhyymA9r');
const duration = 1250;
const easing = 'ease-out';
const id = '6h0KV3KUTnk';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script2 = function()
{
  const target = object('5azQECcpJhu');
const duration = 1250;
const easing = 'ease-out';
const id = '6oRn9STsyBI';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  const target = object('5oKqSxzXTlL');
const duration = 750;
const easing = 'ease-out';
const id = '6QCDU2x8ktB';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5oKqSxzXTlL');
const duration = 750;
const easing = 'ease-out';
const id = '6QCDU2x8ktB';
const pulseAmount = 0.1;
const delay = 1000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script5 = function()
{
  const target = object('5dqbSPKCQpo');
const duration = 750;
const easing = 'ease-out';
const id = '6Sh19TUc8AZ';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script6 = function()
{
  const target = object('5vnYvXNu59L');
const duration = 750;
const easing = 'ease-out';
const id = '5yHkvyiCp9A';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script7 = function()
{
  const target = object('6E9baCbewlE');
const duration = 750;
const easing = 'ease-out';
const id = '61Qiq5qAVB8';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script8 = function()
{
  const target = object('6GeGU7CicNw');
const duration = 750;
const easing = 'ease-out';
const id = '6LjqyEe2oF5';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script9 = function()
{
  const target = object('60GldUaVzbJ');
const duration = 750;
const easing = 'ease-out';
const id = '667LViUvVy3';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script10 = function()
{
  const target = object('67oWUAk3RCO');
const duration = 750;
const easing = 'ease-out';
const id = '6REFHOmCuNT';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script11 = function()
{
  const target = object('6GeGU7CicNw');
const duration = 750;
const easing = 'ease-out';
const id = '6LjqyEe2oF5';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script12 = function()
{
  const target = object('5oKqSxzXTlL');
const duration = 750;
const easing = 'ease-out';
const id = '6QCDU2x8ktB';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script13 = function()
{
  const target = object('5oKqSxzXTlL');
const duration = 750;
const easing = 'ease-out';
const id = '6QCDU2x8ktB';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script14 = function()
{
  const target = object('5oKqSxzXTlL');
const duration = 750;
const easing = 'ease-out';
const id = '6QCDU2x8ktB';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script15 = function()
{
  player.once(() => {
const target = object('5i3wSQwN5z4');
const duration = 750;
const easing = 'ease-out';
const id = '6A2NKCPji7Q';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script16 = function()
{
  const target = object('5i3wSQwN5z4');
const duration = 750;
const easing = 'ease-out';
const id = '6A2NKCPji7Q';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script17 = function()
{
  const target = object('69xKWSYQN9h');
const duration = 1250;
const easing = 'ease-out';
const id = '5egJmRZ2HT4';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script18 = function()
{
  const target = object('5vrS1kgJBTr');
const duration = 1250;
const easing = 'ease-out';
const id = '6KkzjhLL8rq';
const pulseAmount = 0.1;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script19 = function()
{
  const target = object('6UIVti2ecfB');
const duration = 750;
const easing = 'ease-out';
const id = '6TDHbAWwjaG';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script20 = function()
{
  const target = object('66awpHNGRow');
const duration = 750;
const easing = 'ease-out';
const id = '6WSj6XK3Wmj';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script21 = function()
{
  const target = object('5ZhNvzJn1yR');
const duration = 750;
const easing = 'ease-out';
const id = '6MBAMbUzAw6';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script22 = function()
{
  const target = object('6ddpVdpWPrv');
const duration = 750;
const easing = 'ease-out';
const id = '5cSBXwsYpya';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script23 = function()
{
  const target = object('624FCGolVE8');
const duration = 750;
const easing = 'ease-out';
const id = '6FWXa8XKt4m';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script24 = function()
{
  const target = object('5jZyefvaJGT');
const duration = 750;
const easing = 'ease-out';
const id = '5scmw9FgzQs';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script25 = function()
{
  const target = object('5oGXXh7f4uH');
const duration = 750;
const easing = 'ease-out';
const id = '5wfaMN8LS5n';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script26 = function()
{
  const target = object('5r7YxAVmHzu');
const duration = 750;
const easing = 'ease-out';
const id = '5czN5bRIpaz';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script27 = function()
{
  const target = object('6Jl7fpPrcGG');
const duration = 750;
const easing = 'ease-out';
const id = '6hpPamQjnpB';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script28 = function()
{
  const target = object('6oyQO3Idt5v');
const duration = 750;
const easing = 'ease-out';
const id = '6hpPamQjnpB';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
