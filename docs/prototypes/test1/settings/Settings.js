class Settings {
    static GameClass = Prototype;
    
    static Layers = {
        PLAYER: 0,
        OBSTACLES: 1,
        GROUNDENEMIES: 2
    };

    static LayerInteractions = {
        [Settings.Layers.PLAYER]: [
            Settings.Layers.OBSTACLES,
            // Settings.Layers.GROUNDENEMIES
        ],
        [Settings.Layers.GROUNDENEMIES]: [
            Settings.Layers.OBSTACLES,
            Settings.Layers.GROUNDENEMIES,
            Settings.Layers.PLAYER
        ]
    };

    static BackgroundColor = "#FFF";

    static GameWidth = 800;
    static GameHeight = 600;

    static Debug = false;
    static ShowStats = true;
    static ShowGrid = false;
    static GridSize = 50;
}