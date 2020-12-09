module.exports = (sequelize, DataTypes) => {
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        ranking: {
            type: DataTypes.INTEGER
        },
        active: {
            type: DataTypes.INTEGER
        }
    };
    let config = {
        tableName: 'genres',
        timestamps: false
    };
    let genres = sequelize.define('genres', cols, config);

    genres.associate = function(models) {
        genres.hasMany(models.movies, {
            as: "movies",
            foreignKey: "genre_id"
        })
    }

    return genres;
}