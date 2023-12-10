const beepSeconds = process.argv.slice(2);

for (let i = 0; i < beepSeconds.length; i++) {
  if (!isNaN(beepSeconds[i]) && beepSeconds[i] > 0) {
    setTimeout(() => process.stdout.write('\x07'), beepSeconds[i] * 1000);
  }
}