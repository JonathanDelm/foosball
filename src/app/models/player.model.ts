interface PlayerJson {
    _id: string;
}

export class Player {
    private _name: string;
    private _soloWins: number = 0;
    private _soloMatches: number = 0;
    private _duoWins: number = 0;
    private _duoMatches: number = 0;

    constructor(name: string) {
        this._name = name;
    }

    static fromJSON(json: PlayerJson): Player {
        const match = new Player(json._id);
        return match;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get totalWins(): number {
        return this._soloWins + this._duoWins;
    }
    public get totalMatches(): number {
        return this._soloMatches + this._duoMatches;
    }   
    public get totalWinrate(): number {
        if (this.totalMatches !== 0) {
            return (this.totalWins/this.totalMatches)*100;
        } else {
            return 0;
        }
    }
    public get soloWins(): number {
        return this._soloWins;
    }
    public set soloWins(value: number) {
        this._soloWins = value;
    }
    public get soloMatches(): number {
        return this._soloMatches;
    }
    public set soloMatches(value: number) {
        this._soloMatches = value;
    }
    public get soloWinrate(): number {
        if (this._soloMatches !== 0) {
            return (this._soloWins/this._soloMatches)*100;
        } else {
            return 0;
        }
    }
    public get duoWins(): number {
        return this._duoWins;
    }
    public set duoWins(value: number) {
        this._duoWins = value;
    }
    public get duoMatches(): number {
        return this._duoMatches;
    }
    public set duoMatches(value: number) {
        this._duoMatches = value;
    }
    public get duoWinrate(): number {
        if (this._duoMatches !== 0) {
            return (this._duoWins/this._duoMatches)*100;
        } else {
            return 0;
        }
    }
}