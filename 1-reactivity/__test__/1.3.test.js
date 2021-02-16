require('../../util').createTestCase(__filename, (window, logs, done) => {
  const { observe, autorun } = window

  const state = { count: 0 }

  observe(state)

  autorun(() => {
    window.console.log(`count is: ${state.count}`)
  })
  console.log(logs)
  // expect(logs[0][0]).toMatch(`count is: 0`)
  //
  state.count++
  console.log(logs)
  // expect(logs[1][0]).toMatch(`count is: 1`)

  done()
})
