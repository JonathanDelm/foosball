import { Match } from './match.model';

const JsonMatches = [
  {
    id: 'mockId1',
    player1Team1: 'Jonathan',
    player2Team1: 'Fien',
    player1Team2: 'Jasper',
    player2Team2: 'Isabel',
    scoreTeam1: 10,
    scoreTeam2: 8,
    dateAdded: '2020-02-07T18:25:43.511Z'
  },
  {
    id: 'mockId2',
    player1Team1: 'Jonathan',
    player2Team1: '',
    player1Team2: 'Jasper',
    player2Team2: '',
    scoreTeam1: 13,
    scoreTeam2: 11,
    dateAdded: '2020-02-08T16:25:43.511Z'
  },
  {
    id: 'mockId3',
    player1Team1: 'Geert',
    player2Team1: 'Fien',
    player1Team2: 'Jonathan',
    player2Team2: 'Isabel',
    scoreTeam1: 10,
    scoreTeam2: 2,
    dateAdded: '2020-03-13T18:25:43.511Z'
  },
  {
    id: 'mockId4',
    player1Team1: 'Geert',
    player2Team1: '',
    player1Team2: 'Isabel',
    player2Team2: '',
    scoreTeam1: 9,
    scoreTeam2: 11,
    dateAdded: '2020-04-01T16:25:43.511Z'
  },
  {
    id: 'mockId5',
    player1Team1: 'Jonathan',
    player2Team1: 'Fien',
    player1Team2: 'Jasper',
    player2Team2: 'Isabel',
    scoreTeam1: 8,
    scoreTeam2: 10,
    dateAdded: '2020-02-07T18:25:43.511Z'
  },
  {
    id: 'mockId6',
    player1Team1: 'Jonathan',
    player2Team1: '',
    player1Team2: 'Jasper',
    player2Team2: '',
    scoreTeam1: 13,
    scoreTeam2: 11,
    dateAdded: '2020-02-08T16:25:43.511Z'
  },
  {
    id: 'mockId7',
    player1Team1: 'Jonathan',
    player2Team1: 'Fien',
    player1Team2: 'Jasper',
    player2Team2: 'Isabel',
    scoreTeam1: 10,
    scoreTeam2: 0,
    dateAdded: '2020-02-07T18:25:43.511Z'
  },
  {
    id: 'mockId8',
    player1Team1: 'Jonathan',
    player2Team1: '',
    player1Team2: 'Jasper',
    player2Team2: '',
    scoreTeam1: 0,
    scoreTeam2: 10,
    dateAdded: '2020-02-08T16:25:43.511Z'
  },
  {
    id: 'mockId9',
    player1Team1: 'Jonathan',
    player2Team1: 'Fien',
    player1Team2: 'Jasper',
    player2Team2: 'Isabel',
    scoreTeam1: 10,
    scoreTeam2: 8,
    dateAdded: '2020-02-07T18:25:43.511Z'
  },
  {
    id: 'mockId10',
    player1Team1: 'Jonathan',
    player2Team1: '',
    player1Team2: 'Jasper',
    player2Team2: '',
    scoreTeam1: 13,
    scoreTeam2: 11,
    dateAdded: '2020-02-08T16:25:43.511Z'
  }
];

export const MATCHES: Match[] = JsonMatches.map(Match.fromJSON);