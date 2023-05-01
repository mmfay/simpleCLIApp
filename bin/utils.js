module.exports = { showTest: showTest, showHelp: showHelp, showWord: showWord, curDir: curDir };
function showHelp() {
    console.log('\nOptions:\r');
    console.log('\t--version\t      ' + 'Show version number.' + '\t\t' + '[boolean]\r');
    console.log('    -l, --languages\t' + '      ' + 'List all languages.' + '\t\t' + '[boolean]\r');
    console.log('\t--help\t\t      ' + 'Show help.' + '\t\t\t' + '[boolean]\n');  
};
function showTest() {
    console.log('\nTest Works!\r');
};
function showWord(word) {
    console.log('\nWord Kicked Back: ' + word + '\r');
};
function curDir(word) {
    console.log(__dirname);
};
