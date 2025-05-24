function monkeyPatch(commandName) {
    let balance = this.upvotes - this.downvotes;
    let totalVoteCount = this.upvotes + this.downvotes;    
    let commands = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            let upvotesToReport = this.upvotes;
            let downvotesToReport = this.downvotes;
            if (totalVoteCount > 50) {
                let obfuscatedVotes = Math.ceil(Math.max(upvotesToReport, downvotesToReport) * 0.25);
                upvotesToReport += obfuscatedVotes;                                
                downvotesToReport += obfuscatedVotes;                                
            }
            
            return [upvotesToReport, downvotesToReport, balance, getRating.call(this)];

            function getRating() {
                if (totalVoteCount < 10) {
                    return 'new';
                }
                
                if (this.upvotes > totalVoteCount * 0.66) {
                    return 'hot';
                }
                else if (balance >= 0 && this.upvotes > 100) {                    
                    return 'controversial';
                }
                else if (balance < 0) {
                    return 'unpopular';
                }
                else {
                    return 'new';
                }
            }
        }
    }

    return commands[commandName]();
}

let post = {
    id: '3',
    author: 'email',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
}

monkeyPatch.call(post, 'upvote')
monkeyPatch.call(post, 'downvote')
console.log(monkeyPatch.call(post, 'score'))
for (let i = 0; i < 50; i++) {
    monkeyPatch.call(post, 'downvote')    
}

console.log(monkeyPatch.call(post, 'score'))
