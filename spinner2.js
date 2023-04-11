const needles = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

for (let i = 0; i < needles.length; i++) {
  let needle = needles[i];
  let time = 100 + i * 200;
  setTimeout(() => {
    if (i === needles.length - 1) {
      return process.stdout.write(`\r ${needle}   \n`);
    }
    process.stdout.write(`\r ${needle}   `);
  }, time);
}