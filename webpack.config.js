module.exports = {
    "mode": "development",
    "entry": [
        "./src/sass/main.sass",
        "./src/ts/main.ts"
    ],
    "module": {
        "rules": [
            {
                "test": /\.(scss|sass)$/,
                "use": [
                    "style-loader",
                    "css-loader",
                    "sass-loader"                  
                ]
            },    
            {
                "test": /\.ts?$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "ts-loader",
                    "options": {
                        "transpileOnly": true
                    }
                }
            }                         
        ]
    }
}