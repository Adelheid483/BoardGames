﻿namespace BoardGames.Domain.Entities;

public abstract class Entity
{
    public Guid Id { get; set; }

    public bool IsNew => Id == default;
}