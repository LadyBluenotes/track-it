module.exports = {
    getIndex: (req,res)=>{
        res.render('home.ejs')
    },

    getAbout: (req,res) => {
        res.render('about.ejs')
    }
}