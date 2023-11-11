const PhotonPacket = require('./PhotonPacket');
const EventEmitter = require('events');

class PhotonPacketParser extends EventEmitter {
	constructor() {
		super();
	}

	handle(buff) {
		this.emit('packet', new PhotonPacket(this, buff));
	}
}

module.exports = PhotonPacketParser;