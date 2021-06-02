import app from './app';


async function main() {
    await app.listen(2000);
    console.log('Server on port 2000');
};

main();