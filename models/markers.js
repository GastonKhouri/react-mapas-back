

class Markers {

    constructor() {

        this.actives = {};

    }

    addMarker( marker ) {

        this.actives[ marker.id ] = marker;

        return marker;

    }

    removeMarket( id ) {

        delete this.actives[ marker.id ];

    }

    updateMarker( marker ) {

        this.actives[ marker.id ] = marker;

        return marker;

    }

}

module.exports = Markers;