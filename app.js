$('.button').on('click', function () {
    let $title = $('#title').val();
    let $rating = $('#rating').val();

    if (isNaN($rating) || $rating < 0 || $rating > 10 || $rating === "") {
        alert('Please enter a valid number between 0 and 10');
        return;
    }

    if ($title.length <= 2) {
        alert('Please enter a movie title longer than 2 characters');
        return;
    }

    const listItem = $(`<li>${$title} ${$rating}</li>`);
    const deleteButton = $('<input type="button" value="x" class="delete"/>');
    $('ul').append(listItem);
    listItem.append(deleteButton);
    deleteButton.on('click', function () {
        listItem.remove();
    })
    $('#title').val('');
    $('#rating').val('');
})

$('#sortAlphabetically').on('click', function () {
    const movieList = $('ul');
    const movies = movieList.children().get();
    movies.sort(function (a, b) {
        const titleA = $(a).text().toLowerCase();
        const titleB = $(b).text().toLowerCase();
        return titleA.localeCompare(titleB);
    });
    movieList.empty();
    $(movies).each(function () {
        movieList.append(this);
    });
});

$('#sortByRating').on('click', function () {
    const movieList = $('ul');
    const movies = movieList.children().get();
    movies.sort(function (a, b) {
        const ratingA = parseFloat($(a).text().split(' ')[1]);
        const ratingB = parseFloat($(b).text().split(' ')[1]);
        return ratingB - ratingA;
    });
    movieList.empty();
    $(movies).each(function () {
        movieList.append(this);
    });
});