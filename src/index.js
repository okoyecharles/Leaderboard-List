import './scss/index.scss';
import { handleSubmit, load } from './modules/interface.js';

// Load the Leaderboard List
load();

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => load());
