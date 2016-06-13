entry: {
  app: 'app/index.ts'
},
output: {
  filename: 'app.js'
},
module: {
	loaders: [
	  {
	    test: /\.ts$/
	    loaders: 'ts'
	  },
	  {
	    test: /\.css$/
	    loaders: 'style!css'
	  }
	]
}
plugins: [
  new webpack.optimize.UglifyJsPlugin()
]