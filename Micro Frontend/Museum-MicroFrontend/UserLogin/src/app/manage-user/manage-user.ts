import { Component } from '@angular/core';
import { UserServices } from '../services/user-services';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-manage-user',
  imports: [CommonModule, FormsModule, NgxPaginationModule,RouterLink],
  templateUrl: './manage-user.html',
  styleUrl: './manage-user.css',
})
export class ManageUser {
  searchTerm: string = '';
  currentPage: number = 1;
  users: any[] = [];
  constructor(private userServices: UserServices, private route: Router) {}

  get filteredUsers() {
    const term = this.searchTerm?.toLowerCase() || '';
    return this.users.filter(
      (user) =>
        user.username?.toLowerCase().includes(term) ||
        false ||
        user.email?.toLowerCase().includes(term) ||
        false
    );
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    return this.userServices.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }

  loadData() {
    this.route.navigate(['/mfe1/manage-user']);
  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userServices.deleteUser(id).subscribe({
        next: () => {
          this.users = this.users.filter((u) => u.userId !== id);
          console.log(`User with ID ${id} deleted successfully.`);
          alert('User deleted successfully!');
          this.loadData();
        },
        error: (err) => {
          console.error('Delete failed', err);
          alert('Failed to delete user. Please try again.');
        },
      });
    }
  }

  updateUser(userId: any) {
    console.log(userId);

    this.route.navigate(['/mfe1/update-user', userId]);
  }
}
