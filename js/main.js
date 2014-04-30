var app = {

    findByName: function() {
        console.log('findByName');
        this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                var elem = '<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a><img src="img/' + e.firstName + '_' + e.lastName + '.jpg"></li>';
                $('.employee-list').append(elem);
                console.log(elem);
            }
        });
    },

    initialize: function() {
        this.store = new MemoryStore();
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
        this.findByName();
    }

};

app.initialize();