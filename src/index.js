const hoge = () => {
  console.log("babel-test");
};

const return1 = new Promise((resolve, reject) => {
  if (1) {
    resolve(1)
  }
  reject(0);
});

const returnAsync = async () => {
  if(1) {
    return 'resolve'
  }
  throw new Error('reject')
}
(async () => {
  console.log(await return1);
  console.log(typeof return1);
  console.log(return1);

  console.log('--------------------------------------')

  console.log(await returnAsync())
  returnAsync().then((value) => {
    console.log({value})
    console.log('---')
  })
  console.log(await returnAsync())
})();