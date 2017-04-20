const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values/*, dispatch */) => {
  return sleep(1000) // simulate server latency
    .then(() => {
      if ([ 'kitchen', 'paul', 'george', 'ringo' ].includes(values.username)) {
        throw { locationName: 'That location name is taken' }
      }
    })
}

export default asyncValidate