function delayWithAsyncAwait(milliseconds) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date())
        }, milliseconds);
    });
}

async function playingWithDelays(throwSyncError) {
    console.log('Delaying...', new Date());

    const dateAfterTwoSecond = await delayWithAsyncAwait(1200);
    console.log(dateAfterTwoSecond);

    const dateAfterThreeSeconds = await delayWithAsyncAwait(3000);
    console.log(dateAfterThreeSeconds);

    return 'done';
}

playingWithDelays().then(result => {
    console.log(`After 5 seconds: ${result}`)
})