import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Match } from '../models/match.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history.component.html',
  styleUrls: ['./match-history.component.css']
})
export class MatchHistoryComponent implements OnInit {
  MatchData: Match[] = [];
  dataSource: MatTableDataSource<Match>;
  displayedColumns: string[] = ['winningTeam', 'score', 'losingTeam', 'dateAdded'];
  loadContent: Boolean = false;

  constructor(private matchApi: ApiService) {
    this.matchApi.GetMatches().subscribe(data => {

      this.MatchData = data;
      this.dataSource = new MatTableDataSource<Match>(this.MatchData);

      setTimeout(() => {
        this.dataSource.sort = this.sort;
        this.dataSource.filterPredicate = (match: Match, filter: string) => {
          const scoreString1 = match.scoreWinningTeam.toString() + ' - ' + match.scoreLosingTeam.toString();
          const scoreString2 = match.scoreWinningTeam.toString() + '-' + match.scoreLosingTeam.toString();
          const scoreString3 = match.scoreLosingTeam.toString() + ' - ' + match.scoreWinningTeam.toString();
          const scoreString4 = match.scoreLosingTeam.toString() + '-' + match.scoreWinningTeam.toString();
          return match.winningPlayer1.toLowerCase().includes(filter.toLowerCase()) ||
            match.winningPlayer2.toLowerCase().includes(filter.toLowerCase()) || 
            match.losingPlayer1.toLowerCase().includes(filter.toLowerCase()) ||
            match.losingPlayer2.toLowerCase().includes(filter.toLowerCase()) ||
            scoreString1.includes(filter.toLowerCase()) || scoreString2.includes(filter.toLowerCase()) ||
            scoreString3.includes(filter.toLowerCase()) || scoreString4.includes(filter.toLowerCase());
        };
      }, 0);

      this.loadContent = true;
    }); 
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {    
  
  }

  applyPlayerFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
