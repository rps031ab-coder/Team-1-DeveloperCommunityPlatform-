function getAllUsers(req, res) {

    const developers = [

        {
            id: 1,
            name: "Rudra",
            role: "Backend Developer"
        },

        {
            id: 2,
            name: "Namrata",
            role: "Frontend Developer"
        }

    ];

    res.json(developers);

}

module.exports = {

    getAllUsers

};
