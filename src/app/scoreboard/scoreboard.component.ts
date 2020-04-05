import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Player } from '../models/player.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  playerData: Player[] = [];
  dataSource: MatTableDataSource<Player>;
  displayedColumns: string[] = ['name', 'totalWins', 'totalMatches', 'totalWinrate', 'soloWins', 'soloMatches', 'soloWinrate', 'duoWins', 'duoMatches', 'duoWinrate' ];
  loadContent: Boolean = false;

  constructor(private matchApi: ApiService) {
    this.matchApi.GetPlayers().subscribe(playerData => {
      this.playerData = playerData;
      this.matchApi.GetSoloMatches().subscribe(soloMatchesData => {
        soloMatchesData.forEach(element => {
          this.getPlayerByName(element._id).soloMatches = element.count
        });
        this.matchApi.GetSoloWins().subscribe(soloWinsData => {
          soloWinsData.forEach(element => {
            this.getPlayerByName(element._id).soloWins = element.count
          });
          this.matchApi.GetDuoMatches().subscribe(duoMatchesData => {
            duoMatchesData.forEach(element => {
              this.getPlayerByName(element._id).duoMatches = element.count
            });
            this.matchApi.GetDuoWins().subscribe(duoWinsData => {
              duoWinsData.forEach(element => {
                this.getPlayerByName(element._id).duoWins = element.count
              });
              console.log(this.playerData);

              this.dataSource = new MatTableDataSource<Player>(this.playerData);
              setTimeout(() => {
                this.dataSource.sort = this.sort;
              }, 0);

              this.loadContent = true;
            });
          });
        }); 
      }); 
    }); 
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
  }

  getPlayerByName(name: string): Player {
    return this.playerData.find(player => player.name === name);
  }

}
