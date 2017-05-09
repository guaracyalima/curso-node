process.stdout.write('tesdte de saida');

process.stdin.on('data', function (data)
{
    process.stdout.write(`sua resposta foi ${data.toString()} obrigado\n`)
    process.exit()
})
