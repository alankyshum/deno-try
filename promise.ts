const filePromise: Promise<Deno.File> = Deno.open('./import-map.json');

filePromise.then((file: Deno.File) => {
  setTimeout(() => {
    debugger;
    console.log(file);
    
  }, 5000)
  console.log(file);
});