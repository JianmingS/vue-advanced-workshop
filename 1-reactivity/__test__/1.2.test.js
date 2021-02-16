require('../../util').createTestCase(__filename, (window, logs, done) => {
  const { Dep, autorun } = window

  const dep = new Dep()

  autorun(() => {
    dep.depend()
    window.console.log('updated')
  })
  // expect(logs.length).toBe(1)
  // expect(logs[0][0]).toMatch(`updated`)

  console.log(logs)

  dep.notify()

  console.log(logs)
  // expect(logs.length).toBe(2)
  // expect(logs[1][0]).toMatch(`updated`)

  done()
})
