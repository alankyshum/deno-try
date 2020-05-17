const filePromise: Promise<Deno.File> = Deno.open('./import-map.json');

filePromise.then((file: Deno.File) => {
  setTimeout(() => {
    debugger;
    // need timeout to allow time to attach debugger in Chrome dev tool
    // deno --inspect promise.ts
    console.log(file);
  }, 5000)
});