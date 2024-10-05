import React from 'react';
import './ProfileCard.css';
import profileImage from '../assets/dog-developer.jpg';

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <img src={profileImage} alt="Dog Developer" className="profile-image" />
            <h2 className="profile-name">Dog Developer</h2>
            <p className="profile-description">¡Desarrollador de software y amante de los perros! 🐶✨</p>
        </div>
    );
};

export default ProfileCard;
