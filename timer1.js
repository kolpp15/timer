const args = process.argv.slice(2);

for (let i = 0; i < args.length; i++) {
  if (isNaN(args[i]) || args[i] < 0) {
    continue;
  } else {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, args[i]);
  }
}