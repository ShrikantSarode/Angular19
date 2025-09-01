import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServices } from '../services/user-services';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.html',
  styleUrls: ['./update-user.css'],
  standalone: true,
  imports: [FormsModule,CommonModule],
})
export class UpdateUser implements OnInit {
  user: any = {
    userId: 0,
    userName: '',
    email: '',
    password: '',
    role: {
      roleId: 0,
      name: ''
    }
  };

  roles: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private userServices: UserServices,
    private router: Router
  ) {}

  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  
  this.userServices.getUserById(id).subscribe({
    next: (data) => {
      this.user = {
        ...data,
        role: data.role || { roleId: 0, name: '' }
      };
    },
    error: (err) => {
      console.error('Error fetching user:', err);
    }
  });
 
  this.userServices.getRoles().subscribe({
    next: (data) => {
      this.roles = data;
    },
    error: (err) => {
      console.error('Error fetching roles:', err);
    }
  });
}


  onSubmit(): void {
    const payload = {
      userId: this.user.userId,
      userName: this.user.userName,
      email: this.user.email,
      password: this.user.password,
      role: {
        roleId: this.user.role.roleId,
        name: this.user.role.name
      }
    };

    this.userServices.updateUser(this.user.userId, payload).subscribe({
      next: () => {
        alert('User updated successfully!');
        this.router.navigate(['/mfe1/manage-user']);
      },
      error: (err) => {
        console.error('Update failed:', err);
      }
    });
  }
}
