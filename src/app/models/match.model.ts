interface MatchJson {
    id: string;
    winningPlayer1: string;
    winningPlayer2: string;
    losingPlayer1: string;
    losingPlayer2: string;
    scoreWinningTeam: number;
    scoreLosingTeam: number;
    dateAdded: string;
}

export class Match {
    constructor(
        private _id: string,
        private _winningPlayer1: string,
        private _winningPlayer2: string,
        private _losingPlayer1: string,
        private _losingPlayer2: string,
        private _scoreWinningTeam: number,
        private _scoreLosingTeam: number,
        private _dateAdded: Date
    ) {}
    
    static fromJSON(json: MatchJson): Match {
        const match = new Match(json.id, json.winningPlayer1, json.winningPlayer2, json.losingPlayer1, json.losingPlayer2, json.scoreWinningTeam, json.scoreLosingTeam, new Date(json.dateAdded));
        return match;
    }

    toJSON() {
        return {
            winningPlayer1: this._winningPlayer1,
            winningPlayer2: this._winningPlayer2,
            losingPlayer1: this._losingPlayer1,
            losingPlayer2: this._losingPlayer2,
            scoreWinningTeam: this._scoreWinningTeam,
            scoreLosingTeam: this._scoreLosingTeam,
            dateAdded: this._dateAdded
        };
    }

    // Getters for match history prints
    public get winningTeamHtml(): string {
        if (this.winningPlayer2 === '') {
            return this.winningPlayer1;
        } else {
            return this.winningPlayer1 + '\n\n' + this.winningPlayer2;
        }
    }

    public get losingTeamHtml(): string {
        if (this.losingPlayer2 === '') {
            return this.losingPlayer1;
        } else {
            return this.losingPlayer1 + '\n\n' + this.losingPlayer2;
        }
    }

    // Standard getters
    public get id() : string {
        return this._id;
    }

    public get winningPlayer1() : string {
        return this._winningPlayer1;
    }
    
    public get winningPlayer2() : string {
        return this._winningPlayer2;
    }

    public get losingPlayer1() : string {
        return this._losingPlayer1;
    }

    public get losingPlayer2() : string {
        return this._losingPlayer2;
    }

    public get scoreWinningTeam() : number {
        return this._scoreWinningTeam;
    }

    public get scoreLosingTeam() : number {
        return this._scoreLosingTeam;
    }

    public get dateAdded() : Date {
        return this._dateAdded;
    }
    
}