const DisableTBag = 3;//Time in Seconds
let playerId = [];

module.exports = function disabledumpy(mod) {
    mod.hook('S_SOCIAL', 1, event => {
        if (mod.game.me.is(event.target)) return;//This doesn't disable your own animations
        switch(true){
            case (event.animation == 38||39) && playerId.includes(event.target):
                return false;

            case (event.animation == 38||39) && !playerId.includes(event.target):
                playerId.push(event.target), setTimeout(() => {playerId=[];}, DisableTBag*1E3);
                return;

            default://Any other social ability should play like normal?
                return;
        }
    });
};
