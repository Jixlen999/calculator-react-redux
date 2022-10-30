const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@pages': 'src/pages',
        '@constants': 'src/constants',
        '@store': 'src/store',
        '@utils': 'src/utils',
    })(config);

    return config;
};
