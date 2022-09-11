module.exports = {
    getIndex: (req,res)=>{
        res.render('main.ejs')
    },

    getAbout: (req,res) => {
        res.render('about.ejs')
    },

    getuser: (req,res) => {
        res.render('home.ejs')
    }
}