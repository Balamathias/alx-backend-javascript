process.stdout.write("Oya, oya, what is your name?")

process.stdin.on('readable', () => {
    const chunk = process.stdin.read()

    if (chunk) {
        process.stdout.write(`Hello, ${chunk}..,how are you doing.`)
    }

})
process.stdout.on('end', () => process.stdout.write("Processed finished."))