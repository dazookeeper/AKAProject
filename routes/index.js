
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    'artists': [
      { 'name': 'Taylor Swift',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'taylorswift'
      },
      { 'name': 'Kanye West',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'kanyewest'
      },
      { 'name': 'Porter Robinson',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'porterrobinson'
      },
      { 'name': 'RL Grime',
        'image': 'lorempixel.people.1.jpeg',
        'id': 'rlgrime'
      }
    ]
  });
};